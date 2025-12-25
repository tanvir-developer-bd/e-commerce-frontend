'use client';

import { Layout, Menu, Button, Space, Drawer } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const menuItems: MenuProps['items'] = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Products' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
];
const btnItems = [
    {
        key: 1, label: 'Login', href: '/auth/login'
    },
    {
        key: 2, label: 'Register', href: '/auth/register'
    },
]
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[#bce3c9]'>
            <div className="custom-container ">
                <Header
                    className="flex items-center justify-between sticky top-0 z-50  px-4"
                    style={{ height: 64 }}
                >
                    {/* Logo */}
                    <div className="text-lg font-bold">Logo</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 ml-8">
                        <Menu
                            mode="horizontal"
                            items={menuItems}
                            style={{ flex: 1, borderBottom: 'none', backgroundColor: '#bce3c9', fontWeight: "bold" }}
                        />
                    </div>

                    {/* Auth Buttons (Desktop) */}
                    <div className="hidden md:flex space-x-2">
                        {btnItems.map((btn) => {
                            if (btn.label === 'Login') {
                                return (
                                    <Button
                                     href={btn.href}
                                        key={btn.key}
                                        type="text"
                                        className="font-bold! !hover:bg-[#3bb77e] !hover:text-white"
                                    >
                                        {btn.label}
                                    </Button>
                                );
                            }
                            if (btn.label === 'Register') {
                                return (
                                    <Button
                                    href={btn.href}
                                        key={btn.key}
                                        type="primary"
                                        className="font-bold!"
                                    >
                                        {btn.label}
                                    </Button>
                                );
                            }
                        })}
                    </div>


                    {/* Hamburger (Mobile) */}
                    <Button
                        className="flex md:hidden!"
                        icon={<MenuOutlined />}
                        type="text"
                        onClick={() => setOpen(true)}
                    />


                    {/* Drawer Menu (Mobile) */}
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                        <Menu mode="vertical" items={menuItems} />
                        <div className="mt-4 flex flex-col gap-2">
                            <Button type="text" className='font-bold!'>Login</Button>
                            <Button type="primary" className='font-bold!'>Register</Button>
                        </div>
                    </Drawer>
                </Header>
            </div>
        </div>
    );
};

export default Navbar;
