import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import httpRequest from '../utils/httpRequest';

function ActivationPage() {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await httpRequest.post('/auth/activation', {
                        activation_token,
                    });
                } catch (error) {
                    console.log(error);
                    setError(true);
                }
            };
            activationEmail();
        }
    }, [activation_token]);

    return (
        <div style={{}}>
            {error ? (
                <p className="font-bold">You token is expired!</p>
            ) : (
                <p>Your account has been created successfully.</p>
            )}
        </div>
    );
}

export default ActivationPage;
