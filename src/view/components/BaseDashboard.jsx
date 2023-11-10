import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { entries, lowerCase, startCase, values } from "lodash";
import { schema } from "../../models/schema";
import { API, graphqlOperation } from "aws-amplify";
import { Card, Col, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { excludeModelsFromDashboardStats } from "../../settings";
import { deriveComponent } from "./BaseTable";
import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function BaseDashboard() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);

    useEffect(() => {
        user?.appsync && (async () => {
            try {
                
                const query = `
                    query GetStats{
                        getBase(id: "${user.appsync.base}"){
                            ${values(schema.models).map(({ name, pluralName }) => !excludeModelsFromDashboardStats.includes(name) && `${lowerCase(pluralName)} { items { id } }`).filter(Boolean).join('\n')}
                        }
                    }
                `;
                const { data: { getBase } } = await API.graphql(graphqlOperation(query, { filter: { _deleted: { ne: true } } }));

                setStats(entries(getBase).map(([model, { items }]) => ({ model, count: items.length })));
            }
            catch (e) {
                console.log(e);
            }
        })()
    }, [user]);

    return <>
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-16">
            <Col span={8}>
                <StorageImage style={{maxHeight: 60, width: 'auto'}} imgKey={user.appsync.company?.logo} />
                <h1 className="hp-mb-0">Dashboard</h1>
            </Col>
        </Row>
        {
            stats ? <Row gutter={[16, 16]} align="middle">
                {stats.map(({ model, count }, key) => <Col lg={4} xs={8} key={key}>
                    <Card onClick={() => navigate(`/${model}`)} className="hp-border-color-black-40 hp-cursor-pointer hp-border-radius-xxl" bodyStyle={{ padding: 16 }}>
                        <Row gutter={[16, 16]} align="middle">
                            <Col flex="1 0 0" className="hp-overflow-hidden hp-text-center">
                                <h3 className="hp-mb-8 hp-font-weight-600">
                                    <span>{count}</span>
                                </h3>
                                <p className="hp-p1-body hp-mb-0">
                                    {startCase(model)}
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Col>)}
                <Col lg={4} xs={8}>
                    <Card onClick={() => navigate(`/fleets`)} className="hp-border-color-black-40 hp-cursor-pointer hp-border-radius-xxl" bodyStyle={{ padding: 16 }}>
                        <Row gutter={[16, 16]} align="middle">
                            <Col flex="1 0 0" className="hp-overflow-hidden hp-text-center">
                                <h3 className="hp-mb-8 hp-font-weight-600">
                                    <span>{(user.appsync.company.fleets || []).length}</span>
                                </h3>
                                <p className="hp-p1-body hp-mb-0">
                                    Fleets
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> : <Skeleton />
        }
    </>
}