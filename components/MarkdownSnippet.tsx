import { Input, Row, Col, Space, Typography } from 'antd';
import React from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customCount = `![Alt text](${svgSrc}&count={count})`;
    const customWidth = `![Alt text](${svgSrc}&width={width})`;
    const uniqueTracks = `![Alt text](${svgSrc}&unique={true|1|on|yes})`;

    return (
        <>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Space className="vert-space" direction="vertical" size="small">
                        <Title level={5}>{username} olarak giriş yapıldı.</Title>
                        <Text>Markdown kod parçacığı:</Text>
                        <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                        <Text>
                            Özel sayı için (
                            <b>
                                {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                            </b>
                            ):
                        </Text>
                        <TextArea className="markdown" autoSize readOnly value={customCount} />
                        <Text>
                            Özel genişlik için (
                            <b>
                                {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                            </b>
                            ):
                        </Text>
                        <TextArea className="markdown" autoSize readOnly value={customWidth} />
                        <Text>Benzersiz parçalar için:</Text>
                        <TextArea className="markdown" autoSize readOnly value={uniqueTracks} />
                        <img className="svg-preview" src={svgSrc} alt="SVG Preview" />
                    </Space>
                </Col>
            </Row>
            <style jsx>{`
                .svg-preview {
                    width: 100%;
                    height: auto; /* Maintain aspect ratio */
                    max-width: 100%; /* Ensure the image doesn’t exceed container width */
                }

                .markdown {
                    font-family: monospace;
                    margin-bottom: 8px !important;
                    width: 100%; /* Ensure the textarea takes full width of the container */
                }

                @media (max-width: 768px) {
                    .markdown {
                        font-size: 14px; /* Adjust font size for smaller screens */
                    }
                }

                @media (max-width: 576px) {
                    .markdown {
                        font-size: 12px; /* Further adjust font size for very small screens */
                    }
                }
            `}</style>
        </>
    );
}
