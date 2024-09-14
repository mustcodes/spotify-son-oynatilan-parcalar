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

                .html-example {
                    margin-top: 10px;
                }

                .html-example input[type="range"] {
                    width: 100%;
                }

                .example {
                    margin-bottom: 20px;
                }
                
                .html-code {
                    white-space: pre-wrap;
                }
            `}</style>
        </Space>
    );
}
