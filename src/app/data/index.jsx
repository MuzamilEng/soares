import React from 'react';
import { Icon } from '@iconify/react';


export const sidebar = [
    {
        // icon: <Icon icon="mage:television-minus" />,
        img: "/img/comp.png",
        title: "Painel",
        path: "/painel",
    },
    {
        icon: <Icon icon="fa6-solid:user-gear" />,
        title: "Gestão de Perfil",
        path: "/gastao",
    },
    {
        // icon: <Icon icon="ri:file-user-line" />,
        icon: <Icon icon="jam:ticket" />,
        title: "Dados de Identificação",
        path: "/dadoas",
    },
    {
        icon: <Icon icon="jam:ticket" />,
        title: "Registrar Voucher",
        path: "/registrar-voucher",
    },
    {
        icon: <Icon icon="jam:ticket" />,
        title: "Validação do Voucher",
        path: "/validaco",
    },
    {
        img: '/img/book_icon.png',
        title: "Validar Livro",
        path: "/validar",
    },
    {
        icon: <Icon icon="jam:ticket" />,
        title: "Validação do Voucher",
        path: "/validaco-voucher",
    },
    {
        icon: <Icon icon="jam:ticket" />,
        title: "Utilização do Voucher",
        path: "/utilizacado-voucher",
    },
    {
        icon: <Icon icon="jam:ticket" />,
        title: "Pagamento do Voucher",
        path: "/pogamento-voucher",
    }
]

export const dadoas_record = [
    {
        title: "Nome da Livraria:",
        value: "Livraria X"
    },
    {
        title: "Endereço:",
        value: "Rua Principal, 123"
    },
    {
        title: "Endereço:",
        value: "+351 123 456 789"
    },
    {
        title: "Email",
        value: "info@livrariax.pt"
    },
    {
        title: "Horario de Funcionamento",
        value: "Seg-Sáb: 10h-19h"
    },
    {
        title: "NIF",
        value: "123456789"
    },
]

export const validaco_voucher = [
    {
        title: "Diego Pina de Sá",
        date: "Validade: 10/03/2025",
        status: "Emitido",
        button_bg: "bg-[#80FFD8]",
        text_color: "text-[#6930C0]"
    },
    {
        title: "Michael Knight",
        date: "Validade: 10/03/2025",
        status: "Não Emitido",
        button_bg: "",
        text_color: "text-[#80FFD8]"
    },
    {
        title: "Dori Doreau",
        date: "Validade: 10/03/2025",
        status: "Utilizado",
        button_bg: "bg-[#ffff]",
        text_color: "text-[#6930C0]"
    },
    {
        title: "Rick Wright",
        date: "Validade: 10/03/2025",
        status: "Expirado",
        button_bg: "",
        text_color: "text-[#ffff]"
    },
    {
        title: "Peter Thornton",
        date: "Validade: 10/03/2025",
        status: "Emitido",
        button_bg: "bg-[#80FFD8]",
        text_color: "text-[#6930C0]"

    },
    {
        title: "April Curtis",
        date: "Validade: 10/03/2025",
        status: "Não Emitido",
        button_bg: "",
        text_color: "text-[#80FFD8]"
    },
    {
        title: "Dr. Bonnie Barstow ",
        date: "Validade: 10/03/2025",
        status: "Utilizado",
        button_bg: "bg-[#ffff]",
        text_color: "text-[#6930C0]"
    },
    {
        title: "Mike Torello",
        date: "Validade: 10/03/2025",
        status: "Expirado",
        button_bg: "",
        text_color: "text-[#ffff]"
    },
    {
        title: "Lynn Tanner",
        date: "Validade: 10/03/2025",
        status: "Emitido",
        button_bg: "bg-[#80FFD8]",
        text_color: "text-[#6930C0]"

    },
    {
        title: "Willie Tanner",
        date: "Validade: 10/03/2025",
        status: "Não Emitido",
        button_bg: "",
        text_color: "text-[#80FFD8]"
    },

]

export const utilizacado_records = [
    {
        name: "Diego Pina de Sá",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Templeton Peck",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Capt. Trunk",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Tony Danza",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Michael Knight",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Devon Miles",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Angus MacGyver",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Devon Miles",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Dori Doreau",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
    {
        name: "Hannibal Smith",
        id: "874d2093g",
        nif: "874d2093g",
        isbn:"978-3-16-148410-0",
        valor: "€215,00",
        status: "Voucher Emitido"
    },
]