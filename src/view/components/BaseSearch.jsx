import { Col, Input, List, Row } from "antd";
import { useSelector } from "react-redux";
import { searchPlaceholder } from "../../settings";
import { useState } from "react";
import { searchResources } from "../../graphql/customQueries";
import { API, graphqlOperation } from 'aws-amplify';
import { routes } from "../../settings";
import { entries, isEmpty, lowerCase, values } from "lodash";
import { schema } from "../../models/schema";

export default function BaseSearch() {
    const user = useSelector(state => state.user);
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState(['ABC', 'DEF']);

    const search = async q => {
        console.log(q, user.appsync.base);
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
                    ${searchableFields.map(({ model, fields }) => `
                        ${lowerCase(schema.models[model].pluralName)}(
                            filter: {
                                or: [
                                    ${fields.map(f => `{ ${f}: { contains: $q } }`).join(`\n`)}
                                ]
                            }
                        ){
                            items{
                                id
                                ${fields.join('\n')}
                            }
                        }
                    `)}
                }
            }
        `;
        console.log(query);

        setSearching(true);
        (async () => {
            try {
                const { data: { getBase } } = await API.graphql(
                    graphqlOperation(searchResources, {
                        base: user.appsync.base,
                        q
                    })
                );

                console.log(getBase);
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
            renderItem={item => (
                <List.Item
                    actions={[<a key="list-loadmore-edit">View</a>]}
                >
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item}</a>}
                        description="Certificate"
                    />
                </List.Item>
            )}
        />
    </>
}