import { Input, Space, Typography } from 'antd';
import React from 'react';
import * as Constants from '../utils/Constants';
import '../styles/styles.css'; // Stil dosyanızı import edin

const { Text, Title } = Typography;
const { TextArea } = Input;

const markdownStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'monospace',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
    padding: '8px',
    boxSizing: 'border-box',
};

const vertSpaceStyle: React.CSSProperties = {
    marginTop: '10px',
    marginBottom: '10px',
};

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
        <Space style={vertSpaceStyle} direction="vertical" size="small">
            <Title level={5}>{username} olarak giriş yapıldı.</Title>
            <Text>Markdown kod parçacığı:</Text>
            <TextArea style={markdownStyle} autoSize readOnly value={markdownCode} />
            <Text>
                Özel sayı için (
                <b>
                    {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                </b>
                ):
            </Text>
            <TextArea style={markdownStyle} autoSize readOnly value={customCount} />
            <Text>
                Özel genişlik için (
                <b>
                    {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                </b>
                ):
            </Text>
            <TextArea style={markdownStyle} autoSize readOnly value={customWidth} />
            <Text>Benzersiz parçalar için:</Text>
            <TextArea style={markdownStyle} autoSize readOnly value={uniqueTracks} />
            <object type="image/svg+xml" data={svgSrc}></object>
        </Space>
    );
}
