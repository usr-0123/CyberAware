import React, { useEffect, useState } from "react";
import { replace, Route, Routes, useNavigate } from "react-router-dom";
import { clearStorageOnTokenExpiry, decodeToken } from "../helpers/token";
import { LogoutOutlined, MenuFoldOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';

import UserRoutes from "./UserDashboard";
import AdminRoutes from "./AdminDashboard";
import { Button, Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { adminSideBarItems, userSidebarItems } from "../components/Layout/Dashboard/SidebarItems";
import { logout } from "../helpers/logout";

function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const route = await logout();
        navigate(route.route, { replace: true });
    };

    useEffect(() => {
        const response = clearStorageOnTokenExpiry();

        if (response && response.route) {
            navigate(response.route, { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const user = decodeToken();

        if (user) {
            setUserDetails(user);
        }

        if (!user) {
            handleLogout()
        } else if (user.usrRole === 'User' && !login) {

            setIsAdmin(false);
            setLogin(!login);
            navigate("/dashboard/user", { replace: true });
        } else if (user.usrRole === 'Admin' && !login) {
            setIsAdmin(true);
            setLogin(!login);
            navigate("/dashboard/admin", { replace: true });
        }
    }, [navigate]);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuClick = (item) => {

        if (!item && !item.key) {
            logout();
        } else {
            navigate(item.item.props.path);
        }
    };

    return (
        <div>
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'transparent',
                        justifyContent: 'space-between'
                    }}
                >
                    <h1 style={{ color: '#fff' }}>Cyberware</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        minWidth: '10%',
                        gap: '10%',
                        fontWeight: '1000',
                        justifyContent: 'space-between'
                    }}>
                        <p>
                            {userDetails ? userDetails.emailAddress : <UserOutlined />}
                        </p>

                        <LogoutOutlined onClick={() => handleLogout()} />
                    </div>
                </Header>
                <Content
                    style={{
                        padding: '10px',
                    }}
                >
                    <Layout
                        style={{
                            padding: '24px 0',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Sider
                            style={{
                                background: colorBgContainer,
                                height: 'max-content'
                            }}
                            width={200}
                            collapsed={isCollapsed}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: isCollapsed ? 'center' : 'flex-end',
                                padding: '10px',
                                flexWrap: 'nowrap',
                            }}>

                                <Button
                                    icon={isCollapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                />
                            </div>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={[location.pathname]}
                                defaultOpenKeys={isAdmin ? ['adminHome'] : ['userHome']}
                                style={{
                                    height: '100%',
                                }}
                                items={isAdmin ? adminSideBarItems : userSidebarItems}
                                onClick={(e) => handleMenuClick(e)}
                            />
                        </Sider>
                        <Content
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route path="user/*" element={<UserRoutes />} />
                                <Route path="admin/*" element={<AdminRoutes />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {/* Cyberware ©{new Date().getFullYear()} Created by Luwi */}
                </Footer>
            </Layout>
        </div>
    );
}

export default Dashboard;