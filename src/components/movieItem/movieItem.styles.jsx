import styled, { css } from "styled-components";
// import icons
import { ReactComponent as Star } from "../../assets/icons/movieCard/star.svg";
import { ReactComponent as ToSee } from "../../assets/icons/movieCard/wantToSee.svg";
import { ReactComponent as Watched } from "../../assets/icons/movieCard/watched.svg";
import { ReactComponent as LoveIt } from "../../assets/icons/movieCard/loveIt.svg";

export const MovieItemContainer = styled.div`
	flex-basis: 16.66%;

	@media (max-width: 1385px) {
		flex-basis: 20%;
	}
	@media (max-width: 1190px) {
		flex-basis: 25%;
	}
	@media (max-width: 990px) {
		flex-basis: 33.33%;
	}
	@media (max-width: 768px) {
		flex-basis: 25%;
	}
	@media (max-width: 740px) {
		flex-basis: 33.33%;
	}
	@media (max-width: 575px) {
		flex-basis: 50%;
	}
	@media (max-width: 358px) {
		flex-basis: 100%;
	}
`;

export const CardContainer = styled.div`
	width: 11rem;
	height: auto;
	margin: 1.5rem auto;
	overflow: hidden;
	text-align: center;

	& img {
		width: 11rem;
		height: 16rem;
		object-fit: fill;
	}

	/* the title anchor */
	& a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
			color: ${(props) => props.theme.components.movieItem.title.color};
		}
	}

	& .movie-title {
		color: ${(props) => props.theme.components.movieItem.title.color};
		margin: 0.5rem 0;
		text-align: center;
		height: 3rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		width: 11rem;
		height: auto;
		margin: 0.3rem auto;
		flex-basis: 50%;

		& img {
			max-width: 100%;
			width: 11rem;
			height: 15rem;
			object-fit: fill;
		}

		& .movie-title {
			margin: 0.3rem 0;
		}
	}
	@media (max-width: 370px) {
		& img {
			width: 10.7rem;
			height: 14.5rem;
		}
	}
`;

// ? IMDB media
export const CardMediaContainer = styled.div`
	position: relative;

	& .image-container {
		position: relative;

		& span {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 98.5%;
			background-color: #a3a2a29d;

			& a {
				margin: auto;
				width: 30%;

				& img {
					width: 100%;
					height: auto;
				}
			}
		}

		&:hover span {
			display: flex;
		}
	}

	@media (max-width: 768px) {
		& .image-container:hover span {
			display: none;
		}
	}
`;

export const CardImdbRating = styled.span`
	position: absolute;
	bottom: 0.3rem;
	right: 0.25rem;
	width: 2.6rem;
	height: auto;
	display: flex;
	flex-direction: row;
	background-color: #060e0b;
	border-radius: 1rem;

	& p {
		color: ${(props) => props.theme.components.movieItem.imdb.rating};
		margin: auto 0.1rem;
		padding: 0;
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		width: 2.4rem;

		& p {
			font-size: 0.7rem;
		}
	}
`;

export const ImdbRatingStar = styled(Star)`
	width: 0.75rem;
	fill: ${(props) => props.theme.components.movieItem.imdb.star};
	margin: 0 0 0.1rem 0.35rem;

	@media (max-width: 768px) {
		width: 0.65rem;
		margin: 0 0 0.05rem 0.35rem;
	}
`;

// ? Save List Buttons
export const CardSaveListButtons = styled.div`
	position: absolute;
	top: 0.03rem;
	right: 0.07rem;
	width: 1.8rem;
	height: 4.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background: ${(props) => props.theme.components.movieItem.imdb.background};
	border-radius: 20rem;

	@media (max-width: 370px) {
		top: 0.08rem;
		right: 0.22rem;
	}
`;

const IconStyle = css`
	width: 1.2rem;
	height: 1.2rem;
	cursor: pointer;
`;

export const ToSeeIcon = styled(ToSee)`
	${IconStyle}
	fill: ${(props) =>
		props.iconstyled === "true"
			? props.theme.components.movieItem.saveButtons.wantToSee.second
			: props.theme.components.movieItem.saveButtons.wantToSee.first};

	&:hover {
		fill: ${(props) =>
			props.iconstyled === "true"
				? props.theme.components.movieItem.saveButtons.wantToSee.third
				: props.theme.components.movieItem.saveButtons.wantToSee
						.second};
	}

	/* this prevents the button from remaining active on tablets or phones */
	@media (max-width: 900px) {
		&:hover {
			fill: ${(props) =>
				props.iconstyled === "true"
					? props.theme.components.movieItem.saveButtons.wantToSee
							.second
					: props.theme.components.movieItem.saveButtons.wantToSee
							.first};
		}
	}
`;

export const WatchedIcon = styled(Watched)`
	${IconStyle}
	fill: ${(props) =>
		props.iconstyled === "true"
			? props.theme.components.movieItem.saveButtons.watched.second
			: props.theme.components.movieItem.saveButtons.watched.first};
	margin-left: 0.15rem;

	&:hover {
		fill: ${(props) =>
			props.iconstyled === "true"
				? props.theme.components.movieItem.saveButtons.watched.third
				: props.theme.components.movieItem.saveButtons.watched.second};
	}

	/* this prevents the button from remaining active on tablets or phones */
	@media (max-width: 900px) {
		&:hover {
			fill: ${(props) =>
				props.iconstyled === "true"
					? props.theme.components.movieItem.saveButtons.watched
							.second
					: props.theme.components.movieItem.saveButtons.watched
							.first};
		}
	}
`;

export const LoveItIcon = styled(LoveIt)`
	${IconStyle}
	fill: ${(props) =>
		props.iconstyled === "true"
			? props.theme.components.movieItem.saveButtons.loveIt.second
			: props.theme.components.movieItem.saveButtons.loveIt.first};

	&:hover {
		fill: ${(props) =>
			props.iconstyled === "true"
				? props.theme.components.movieItem.saveButtons.loveIt.third
				: props.theme.components.movieItem.saveButtons.loveIt.second};
	}

	/* this prevents the button from remaining active on tablets or phones */
	@media (max-width: 900px) {
		&:hover {
			fill: ${(props) =>
				props.iconstyled === "true"
					? props.theme.components.movieItem.saveButtons.loveIt.second
					: props.theme.components.movieItem.saveButtons.loveIt
							.first};
		}
	}
`;
