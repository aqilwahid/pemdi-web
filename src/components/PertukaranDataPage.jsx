import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Zap, Play, Box, Check, AlertCircle } from 'lucide-react';
import './PertukaranDataPage.css';

const PertukaranDataPage = () => {
    const [selectedResource, setSelectedResource] = useState('/penduduk');
    const [selectedMethod, setSelectedMethod] = useState('GET');
    const [testResponse, setTestResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const apiResources = [
        {
            path: '/',
            methods: []
        },
        {
            path: '/penduduk',
            methods: ['GET', 'POST'],
            children: [
                { path: '/{nik}', methods: ['GET', 'DELETE'] }
            ]
        },
        {
            path: '/perizinan',
            methods: ['GET'],
            children: [
                { path: '/status', methods: ['GET'] }
            ]
        },
        {
            path: '/bansos',
            methods: ['GET', 'POST']
        }
    ];

    const handleMethodClick = (path, method) => {
        setSelectedResource(path);
        setSelectedMethod(method);
        setTestResponse(null); // Reset prev test
    };

    const runTest = () => {
        setIsLoading(true);
        setTestResponse(null);

        // Simulate API latency
        setTimeout(() => {
            setIsLoading(false);
            if (selectedResource === '/penduduk' && selectedMethod === 'GET') {
                setTestResponse({
                    status: 200,
                    time: '124ms',
                    data: [
                        { nik: '347101...', nama: 'Budi Santoso', alamat: 'Sleman' },
                        { nik: '347102...', nama: 'Siti Aminah', alamat: 'Bantul' }
                    ]
                });
            } else if (selectedMethod === 'POST') {
                setTestResponse({
                    status: 201,
                    time: '210ms',
                    data: { message: "Data resource created successfully.", id: "new_id_123" }
                });
            } else {
                setTestResponse({
                    status: 200,
                    time: '85ms',
                    data: { message: `Mock response for ${selectedMethod} ${selectedResource}` }
                });
            }
        }, 1500);
    };

    return (
        <div className="api-gateway-container">
            <div className="api-header">
                <div className="breadcrumb">
                    <Box size={16} />
                    <span>APIs</span>
                    <ChevronRight size={14} />
                    <strong>PEMDI_Core_API</strong>
                    <ChevronRight size={14} />
                    <span>Resources</span>
                </div>
                <div className="header-actions">
                    <button className="btn-deploy">Deploy API</button>
                    <button className="btn-actions">Actions</button>
                </div>
            </div>

            <div className="api-layout">
                {/* Left: Resources Tree */}
                <div className="resources-pane">
                    <div className="pane-title">Resources</div>
                    <div className="resource-tree">
                        {apiResources.map((res, idx) => (
                            <div key={idx} className="resource-item-group">
                                <div className={`resource-path ${selectedResource === res.path ? 'active' : ''}`}>
                                    <span className="path-text">{res.path}</span>
                                </div>
                                <div className="method-list">
                                    {res.methods.map(method => (
                                        <div
                                            key={method}
                                            className={`method-item ${method} ${selectedResource === res.path && selectedMethod === method ? 'selected' : ''}`}
                                            onClick={() => handleMethodClick(res.path, method)}
                                        >
                                            {method}
                                        </div>
                                    ))}
                                </div>
                                {res.children && res.children.map((child, cIdx) => (
                                    <div key={cIdx} className="child-resource">
                                        <div className="resource-path">
                                            <span className="path-text child">{child.path}</span>
                                        </div>
                                        <div className="method-list">
                                            {child.methods.map(method => (
                                                <div
                                                    key={method}
                                                    className={`method-item ${method} ${selectedResource === child.path && selectedMethod === method ? 'selected' : ''}`}
                                                    onClick={() => handleMethodClick(child.path, method)}
                                                >
                                                    {method}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Method Execution Pane */}
                <div className="execution-pane">
                    <div className="execution-header">
                        <h2>{selectedMethod} - {selectedResource}</h2>
                        <span className="subtitle">Method Execution</span>
                    </div>

                    <div className="flow-diagram">
                        {/* Simple visualization of flow */}
                        <div className="flow-step client">Client</div>
                        <div className="flow-arrow">&rarr;</div>
                        <div className="flow-step method-req">Method Request</div>
                        <div className="flow-arrow">&rarr;</div>
                        <div className="flow-step integration">Integration Request</div>
                        <div className="flow-arrow">&rarr;</div>
                        <div className="flow-step endpoint">Endpoint</div>
                    </div>

                    <div className="test-console">
                        <div className="console-header">
                            <h3>Test Console</h3>
                            <span className="badge-beta">Beta</span>
                        </div>
                        <div className="console-body">
                            {selectedMethod === 'POST' && (
                                <div className="req-body-input">
                                    <label>Request Body</label>
                                    <textarea placeholder='{ "key": "value" }'></textarea>
                                </div>
                            )}

                            <button className="btn-test" onClick={runTest} disabled={isLoading}>
                                {isLoading ? (
                                    <>Running...</>
                                ) : (
                                    <><Zap size={16} fill="currentColor" /> Test</>
                                )}
                            </button>

                            {/* Response Area */}
                            {testResponse && (
                                <div className="response-area">
                                    <div className="response-meta">
                                        <span className="status-code success">Status: {testResponse.status}</span>
                                        <span className="latency">Time: {testResponse.time}</span>
                                    </div>
                                    <div className="json-viewer">
                                        <pre>{JSON.stringify(testResponse.data, null, 2)}</pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PertukaranDataPage;
