import { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { useGetAllUsersQuery } from '../../../features/api/usersApi';

const AdminHomeGeneral = () => {
    const [arrayData, setArrayData] = useState();

    const { data, refetch } = useGetAllUsersQuery();

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data);
        } else {
            setArrayData([]);
        }
    }, [data]);

    const transformData = (arrayData) => {
        let maleCount = 0;
        let femaleCount = 0;
        let adminCount = 0;
        let userCount = 0;

        arrayData && arrayData.forEach(user => {
            if (user.gender) {
                maleCount += 1;
            } else {
                femaleCount += 1;
            }

            if (user.usrRole === 'Admin') {
                adminCount += 1;
            } else if (user.usrRole === 'User') {
                userCount += 1;
            }
        });

        return [
            { name: 'Male', genderCount: maleCount, roleCount: null },
            { name: 'Female', genderCount: femaleCount, roleCount: null },
            { name: 'Admin', genderCount: null, roleCount: adminCount },
            { name: 'User', genderCount: null, roleCount: userCount }
        ];
    };

    const graphData = transformData(arrayData);

    return (
        <>
            <h1>Administrative Roles and Gender statistics</h1>
            <BarChart width={730} height={250} data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="genderCount" fill="#4096ff" />
                <Bar dataKey="roleCount" fill="#40c040" />
            </BarChart>
        </>
    );
};

export default AdminHomeGeneral;