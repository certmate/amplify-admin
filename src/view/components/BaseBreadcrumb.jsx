import { useNavigate } from "react-router-dom";
import { Row, Col, Breadcrumb } from "antd";
import { last, startCase } from "lodash";

export default function BaseBreadcrumb({ pathFragments }) {
    const navigate = useNavigate();
    
    return <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-0">
        <Col span={24}>
            <Breadcrumb separator=">">
                <Breadcrumb.Item onClick={() => navigate('/')} className="hp-cursor-pointer">Dashboard</Breadcrumb.Item>

                {pathFragments.map(f => {
                    const p = pathFragments.indexOf(f);
                    const q = pathFragments.slice(p, p + 1).toString();

                    return <Breadcrumb.Item onClick={() => q !== last(pathFragments) && navigate(`/${pathFragments.slice(0, p + 1).join('/')}`)} key={`crumb-${f}`} className={`${q !== last(pathFragments) ? 'hp-cursor-pointer' : ''}`}>
                        {startCase(q)}
                    </Breadcrumb.Item>
                })}
            </Breadcrumb>
        </Col>
    </Row>
}