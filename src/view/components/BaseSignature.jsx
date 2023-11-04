import { Button, Space } from 'antd';
import { Storage } from 'aws-amplify';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SignatureCanvas from 'react-signature-canvas';
import { v4 } from 'uuid';

export default function BaseSignature({ defaultValue, onChange, autoSave }) {
    const padRef = useRef(null);
    const user = useSelector(state => state.user);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        defaultValue && (async () => {
            Storage.get(defaultValue)
                .then(result => {

                    fetch(result)
                        .then(response => response.blob())
                        .then(blob => {
                            // Convert the blob to a base64 encoded string if required
                            const reader = new FileReader();
                            reader.onload = () => {
                                const base64String = reader.result.split(',')[1];
                                padRef.current.clear();
                                padRef.current.fromDataURL(`data:image/png;base64,${base64String}`, { width: 500, height: 200 });
                                // Use the base64String as needed
                            };
                            reader.readAsDataURL(blob);
                        })
                        .catch(error => {
                            // Handle any errors that occur during the fetch request
                            console.error('Error fetching image:', error);
                        });
                    // Convert the file to a base64 string
                    // return result.Body.text();

                    // imgElement.src = `data:image/png;base64, ${base64String}`;
                });
        })();
    }, [defaultValue]);

    const save = async () => {
        setSaving(true);
        (async () => {
            const base64String = padRef.current.toDataURL('image/png').split(';base64,')[1];
            const byteArray = atob(base64String);
            const byteNumbers = new Array(byteArray.length);
            for (let i = 0; i < byteArray.length; i++) {
                byteNumbers[i] = byteArray.charCodeAt(i);
            }
            const byteArrayBuffer = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArrayBuffer]);

            const key = `${user.cognito.username}/${v4()}.png`;
            Storage.put(key, blob, {
                contentType: 'image/png', // Specify the content type of the file
            })
                .then(result => {
                    console.log('File uploaded successfully:', result);
                    onChange(key);
                })
                .catch(error => {
                    console.error('Error uploading file:', error);
                }).finally(() => setSaving(false));
        })()
    }

    return <>
        <SignatureCanvas ref={padRef} onEnd={() => autoSave && save()} penColor='#000000' backgroundColor='#ffffff' canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
        <Space className='hp-mt-8'>
            <Button icon={null} type="link" onClick={() => padRef.current.clear()}>
                Clear
            </Button>
            {!autoSave && <Button icon={null} type="primary" loading={saving} onClick={save}>
                Save
            </Button>}
        </Space>
    </>
}