import styled from "styled-components";
// import icons
import { ReactComponent as Scroll } from "../../assets/icons/homePage/scroll.svg";

export const HomeLatestNewsContainer = styled.div`
	position: relative;
	width: auto;
	margin: 4rem 2rem 2rem 2rem;

	@media (max-width: 1200px) {
		margin: 4rem 1rem 2rem 1rem;
	}

	@media (max-width: 768px) {
		margin: 3rem 0.5rem 2rem 0.5rem;
	}

	@media (max-width: 360px) {
		margin: 3rem 0.2rem 2rem 0.2rem;
	}
`;

export const SectionTitleContainer = styled.div`
	width: 100%;
	height: auto;
	border-bottom: 3px solid
		${(props) => props.theme.pages.home.homeLatestMoviesSection.border};
	filter: drop-shadow(
		0.5rem 0.5rem 2px
			${(props) =>
				props.theme.pages.home.homeLatestMoviesSection.dropShadow}
	);
	-webkit-filter: drop-shadow(
		0.5rem 0.5rem 2px
			${(props) =>
				props.theme.pages.home.homeLatestMoviesSection.dropShadow}
	);
	display: flex;
	justify-content: space-between;

	& .section-title {
		text-transform: uppercase;
		font-size: 1.9rem;
		font-weight: 600;
		color: ${(props) =>
			props.theme.pages.home.homeLatestMoviesSection.sectionTitle};
		margin: 0 2rem;
	}

	@media (max-width: 768px) {
		& .section-title {
			font-size: 1.6rem;
			margin: 0 1.5rem;
		}
	}
	@media (max-width: 450px) {
		& .section-title {
			font-size: 1.5rem;
			margin: 0 1.1rem;
		}
	}
`;

export const ScrollIcon = styled(Scroll)`
	margin: auto 1rem;
	width: 1.4rem;
	padding: 0.2rem;
	border-radius: 0.5rem;
	background-color: ${(props) =>
		props.theme.pages.home.homeLatestMoviesSection.scrollIcon.fill};

	@media (max-width: 768px) {
		margin: auto 0.8rem;
		width: 1.6rem;
		padding: 0.1rem;
	}
	@media (max-width: 450px) {
		margin: auto 0.3rem;
		width: 1.5rem;
		padding: 0.1rem;
	}
`;

export const WrapperContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	margin: 1rem 0;
	scroll-snap-type: x mandatory;

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px
			${(props) =>
				props.theme.pages.home.homeLatestMoviesSection.wrapperContainer
					.scrollbarTrack.boxShadow};
		border-radius: 100px;
		background-color: ${(props) =>
			props.theme.pages.home.homeLatestMoviesSection.wrapperContainer
				.scrollbarTrack.background};
	}
	&::-webkit-scrollbar {
		height: 11px;
		cursor: pointer;
	}
	&::-webkit-scrollbar-thumb {
		background: ${(props) =>
			props.theme.pages.home.homeLatestMoviesSection.wrapperContainer
				.scrollbarThumb.background};
		border-radius: 10px;
		box-shadow: inset 0 0 6px
			${(props) =>
				props.theme.pages.home.homeLatestMoviesSection.wrapperContainer
					.scrollbarThumb.boxShadow};
	}

	& div {
		width: 19.85rem;
		margin: 0 0.5rem;
		scroll-snap-align: center;

		&.image-container {
			margin: 0;
		}

		& #titleContainer {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 0.5rem 0;
		}
	}

	@media (max-width: 768px) {
		margin: 1.1rem 0;

		& div {
			width: 20rem;
			margin: 0 0.65rem;
		}
	}
`;

export const SlideArrow = styled.span`
	width: auto;
	height: auto;
	position: absolute;
	top: 50%;
	${(props) => (props.leftD ? "left: 0;" : "right: 0;")}
	padding: 2.2rem 1.4rem;
	z-index: 1;
	transform: translate(0, -50%)
		scaleX(${(props) => (props.leftD ? "-1" : "1")});
	background: ${(props) =>
		props.theme.pages.home.homeLatestMoviesSection.arrowBtnBg};
	background-image: url(${(props) => props.arrow});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}

	@media (max-width: 768px) {
		opacity: 1;
		padding: 1.7rem 1.25rem;
	}
	@media (max-width: 450px) {
		padding: 1.5rem 1.05rem;
	}
	@media (max-width: 375px) {
		${(props) => (props.leftD ? "left: -.2rem;" : "right: -.2rem;")}
	}
`;
