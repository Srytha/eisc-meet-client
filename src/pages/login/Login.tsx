import type React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/useAuthStore';
import { useEffect } from 'react';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { loginWithGoogle, initAuthObserver } = useAuthStore();

    const handleLoginGoogle = (e: React.FormEvent) => {
        e.preventDefault();
        loginWithGoogle().then(() => navigate("/home"));
    }

    useEffect(()   => {
        const unsub = initAuthObserver();
        return () => unsub();
    }, [initAuthObserver]);
    
    return (
        <div className="container-page">
            <div >
                <h1>Iniciar Sesión</h1>
                <div>
                    <button onClick={handleLoginGoogle} >
                        <img src="icons/google-icon.svg" alt="Iniciar sesión con Google" width={24} height={24} />
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login