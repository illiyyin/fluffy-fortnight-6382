import React, { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";

const query = gql`
	query ($page: Int, $perPage: Int) {
		Page(page: $page, perPage: $perPage) {
			pageInfo {
				total
				currentPage
				lastPage
				hasNextPage
				perPage
			}
			media {
				id
				title {
					romaji
				}
			}
		}
	}
`;

export default function DetailAnime() {
  const [location, setLocation] = useLocation();
  const [page,setPage]=useState(0)
  
  const {data} = useQuery(query,{variables:{page:page,perPage:10}})
	console.log(location);
	console.log(data)
	return <div>ListAnime{location}</div>;
}
