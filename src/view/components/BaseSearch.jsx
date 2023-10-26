import { Col, Input, List, Row } from "antd";
import { useSelector } from "react-redux";
import { models, searchPlaceholder } from "../../settings";
import { useState } from "react";
import { searchResources } from "../../graphql/customQueries";
import { API, graphqlOperation } from 'aws-amplify';
import { routes } from "../../settings";
import { chain, entries, find, isEmpty, keys, lowerCase, values } from "lodash";
import { schema } from "../../models/schema";
import { Link } from "react-router-dom";

export default function BaseSearch() {
    const user = useSelector(state => state.user);
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState();

    // TODO Search child models
    const search = async q => {
        /**
         * Get Search Fields
         */
        const searchableFields = values(routes).map(({ model, form: { schema } }) => ({ model, fields: entries(schema).map(([key, { searchable }]) => searchable && key).filter(Boolean) })).filter(({ fields }) => !isEmpty(fields));

        const query = `
            query SearchResources(
                $base: ID!
                $q: String
            ){
                getBase(id: $base){
                    ${searchableFields.map(({ model, fields }) => {
                        const { pluralName } = schema.models[model];
                        return `
                            ${lowerCase(pluralName)}(
                                filter: {
                                    tags: { contains: $q }
                                }
                            ){
                                items{
                                    id
                                    ${fields.join('\n')}
                                }
                            }
                        `
                    })}
                }
            }
        `;

        setSearching(true);
        (async () => {
            try {
                const { data: { getBase } } = await API.graphql(
                    graphqlOperation(query, {
                        base: user.appsync.base,
                        q: chain(q).deburr().camelCase().toLower()
                    })
                );

                // console.log(getBase);
                let results = entries(getBase)
                    .filter(([_, { items }]) => !isEmpty(items))
                    .map(([type, { items }]) => {
                        const { name } = values(schema.models).filter(({ pluralName }) => lowerCase(pluralName) === type)?.[0];
                        const { search: { component: { title }, route }, ...modelData } = models[name];

                        return items.map(fields => {
                            return {
                                id: fields.id,
                                title,
                                type: name,
                                route,
                                description: keys(fields).map(field => `${modelData.schema[field].label}: ${fields[field]}` ).join(" / ")
                            }
                        });
                        
                    }).flat();

                setResults(results);
                setSearching(false);
            }
            catch (e) {
                console.log(e)
            }
        })();
    }

    return <>
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-16">
            <Col span={8}>
                <h1 className="hp-mb-0">Search</h1>
            </Col>
        </Row>
        <Input.Search
            placeholder={searchPlaceholder}
            enterButton={searching ? 'Searching' : 'Search'}
            size="large"
            onSearch={search}
            loading={searching}
        />
        <List
            className="demo-loadmore-list hp-mt-16"
            loading={searching}
            itemLayout="horizontal"
            dataSource={results}
            renderItem={({ title, description, type, route, id }) => (
                <List.Item
                    actions={[<Link to={`${route}?id=${id}`}>View</Link>]}
                >
                    <List.Item.Meta
                        title={`${title} (${type})`}
                        description={description}
                    />
                </List.Item>
            )}
        />
    </>
}