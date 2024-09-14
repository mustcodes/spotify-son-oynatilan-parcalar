import { Input, Space, Typography, Divider, Slider, Form, Radio } from 'antd';
import React, { useState } from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    const [width, setWidth] = useState<number>(400); // Varsayılan genişlik
    const [count, setCount] = useState<number>(5); // Varsayılan özel sayı
    const [unique, setUnique] = useState<string>('false'); // Varsayılan benzersiz parça
    const [customWidthMarkdown, setCustomWidthMarkdown] = useState<string>(`![Alt text](${Constants.BaseUrl}/api?user=${username}&width=400)`);
    const [customCountMarkdown, setCustomCountMarkdown] = useState<string>(`![Alt text](${Constants.BaseUrl}/api?user=${username}&count=5)`);
    const [customUniqueMarkdown, setCustomUniqueMarkdown] = useState<string>(`![Alt text](${Constants.BaseUrl}/api?user=${username})`);

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customWidthCode = `![Alt text](${svgSrc}&width=${width})`;
    const customCountCode = `![Alt text](${svgSrc}&count=${count})`;
    const customUniqueCode = unique === 'true' ? `![Alt text](${svgSrc}&unique=true)` : `![Alt text](${svgSrc})`;

    const handleWidthChange = (value: number) => {
        setWidth(value);
        setCustomWidthMarkdown(`![Alt text](${svgSrc}&width=${value})`);
    };

    const handleCountChange = (value: number) => {
        setCount(value);
        setCustomCountMarkdown(`![Alt text](${svgSrc}&count=${value})`);
    };

    const handleUniqueChange = (e: any) => {
        const value = e.target.value;
        setUnique(value);
        setCustomUniqueMarkdown(value === 'true' ? `![Alt text](${svgSrc}&unique=true)` : `![Alt text](${svgSrc})`);
    };

    return (
        <Space className="container" direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={4} style={{ color: '#1DB954' }}>
                {username} olarak giriş yapıldı.
            </Title>
            <Divider />

            <div className="section">
                <Title level={5}>Markdown kod parçacığı:</Title>
                <TextArea className="markdown" autoSize readOnly value={markdownCode} />
            </div>

            <div className="section">
                <Text>
                    Özel sayı için:
                    <b>
                        {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                    </b>
                </Text>
                <Form.Item label="Sayı" style={{ marginBottom: 0 }}>
                    <Slider
                        min={1}
                        max={10}
                        step={1}
                        value={count}
                        onChange={handleCountChange}
                        tooltipVisible
                        tooltipPlacement="top"
                        style={{ marginBottom: 20 }}
                    />
                    <TextArea className="markdown" autoSize readOnly value={customCountCode} />
                </Form.Item>
            </div>

            <div className="section">
                <Text>
                    Özel genişlik için:
                    <b>
                        {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                    </b>
                </Text>
                <Form.Item label="Genişlik (px)" style={{ marginBottom: 0 }}>
                    <Slider
                        min={Constants.minWidth}
                        max={Constants.maxWidth}
                        step={10}
                        value={width}
                        onChange={handleWidthChange}
                        tooltipVisible
                        tooltipPlacement="top"
                        style={{ marginBottom: 20 }}
                    />
                    <TextArea className="markdown" autoSize readOnly value={customWidthCode} />
                </Form.Item>
            </div>

            <div className="section">
                <Text>Benzersiz parçalar için:</Text>
                <Radio.Group onChange={handleUniqueChange} value={unique} style={{ marginBottom: 20 }}>
                    <Radio value="true">Evet</Radio>
                    <Radio value="false">Hayır</Radio>
                </Radio.Group>
                <TextArea className="markdown" autoSize readOnly value={customUniqueCode} />
            </div>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img src={`${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}`} alt="Preview" style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }} />
            </div>

            <div className="section">
                <Title level={5}>Markdown Kodunuz:</Title>
                <TextArea
                    className="markdown"
                    autoSize
                    readOnly
                    value={`Özel genişlik için:\n${customWidthMarkdown}\n\nÖzel sayı için:\n${customCountMarkdown}\n\nBenzersiz parçalar için:\n${customUniqueMarkdown}`}
                />
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .section {
                    margin-bottom: 20px;
                }

                .markdown {
                    background: #f5f5f5;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    padding: 8px;
                    font-family: monospace;
                }

                .image-preview {
                    text-align: center;
                }

                .image-preview img {
                    border-radius: 8px;
                    border: 1px solid #d9d9d9;
                }
            `}</style>
        </Space>
    );
}
