import React from "react";

export type NavLogoType = {
	name: string;
	icon: React.ReactNode;
};

export type LinkType = {
	name: string;
	href: string;
};

export type IconLinkType = {
	name: string;
	href: string;
	icon: React.ReactNode;
};

export type PhoneType = {
	id: number;
	name: string;
	image: string;
	price: number;
	details: {
		os: string;
		storage: string;
		color: string;
	};
	description: string;
};

export type MessageType = {
    message: string
}