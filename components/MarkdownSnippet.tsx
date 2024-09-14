                        </div>

                        <div className="section">
                            <Text>Benzersiz parçalar için:</Text>
                            <TextArea className="html-code" autoSize readOnly value={`<img src="${svgSrc}${unique === 'true' ? '&unique=true' : ''}" alt="Preview" />`} />
                        </div>
                    </div>
                </TabPane>
            </Tabs>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img
                    src={`${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}`}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }}
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

                .markdown, .html-code {
                    background: #f5f5f5;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    padding: 8px;
                    font-family: monospace;
                    margin-top: 10px;
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
