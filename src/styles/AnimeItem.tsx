import styled from "@emotion/styled";

export const AnimeItem = styled.div`
	display: block;
	& > div > h2 {
		margin: 8px 0;
	}
`;

export const CoverImage = styled.img`
	width: 100%;
  aspect-ratio:0.7;
	max-width: 300px;
	max-height: 437px;
	object-fit: cover;
`;

export const Title = styled.h3`
	font-weight: 600;
	margin: 8px 0;
`;
