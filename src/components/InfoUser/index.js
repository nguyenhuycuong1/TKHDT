import { useEffect, useState } from 'react';
import { getUserById } from '~/services/userService';

function InfoUser({ userId }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getuser = async () => {
            await getUserById(userId).then((res) => setUser(res.result));
        };
        getuser();
    }, [userId]);
    console.log(user);
    return (
        <div>
            <div>
                Người mua: <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{user.name}</span>
            </div>
            <div>
                Số điện thoại: <span style={{ color: 'blue' }}>{user.phone_number}</span>
            </div>
        </div>
    );
}

export default InfoUser;
