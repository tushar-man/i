import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="linear-gradient(180deg, --color-primary, transparent) no-repeat 0 0" border-color="#000000">
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Tushar Mandal
			</Text>
			<Image width="500px" height="100px" src="https://uploads.quarkly.io/5fe6130b04e716001efcb3ad/images/Screenshot%20(23).png?v=2020-12-28T05:47:14.116Z" />
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-404">
					INTRODUCTION TO COURSE
				</Override>
				<Override slot="link-maths">
					MATHS
				</Override>
				<Override slot="link-science">
					SCIENCE
				</Override>
			</Menu>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Image width="1280px" src="https://uploads.quarkly.io/5fe6130b04e716001efcb3ad/images/Screenshot%20(25).png?v=2020-12-27T12:20:56.483Z" />
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				TUSHAR MANDAL
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				{" "}I am a teacher having a youtube channel where I teach about great things and deal with many chapter . Here is the link of the channel.
			</Text>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" background="#23a5a5">
			<SocialMedia youtube="https://www.youtube.com/channel/UCMzP_TCNvsfZdKNtV5TpUpA">
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-red"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});