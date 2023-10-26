import { useSelector } from "react-redux";
import BaseForm from "./BaseForm";
import { useEffect, useState } from "react";
import { getData } from "../../common";
import SweetAlert from 'sweetalert2';
import { entries, keys, lowerCase, startCase } from "lodash";
import { models } from "../../settings";
import { schema } from "../../models/schema";
import { API, graphqlOperation } from "aws-amplify";
import { Card, Col, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

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
                            ${keys(models).map(m => `${lowerCase(schema.models[m].pluralName)} { items { id } }`).join('\n')}
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
            </Row> : <Skeleton />
        }
    </>
}