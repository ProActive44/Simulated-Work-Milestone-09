import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jasmine-dom";
import FeedCard from "../src/components/Feed/FeedCard/FeedCard";

describe("FeedCard Component", () => {
  const feed = {
    id: 1,
    profileImg: "https://via.placeholder.com/150",
    username: "john_doe",
    time: "2h",
    postImg: "https://via.placeholder.com/600",
    likeCount: 150,
    mutualFrndImg1: "https://via.placeholder.com/50",
    mutualFrndImg2: "https://via.placeholder.com/50",
    commentCount: 20,
    caption: "Enjoying the sunset!"
  };

  it("[REQ014]_renders_FeedCard_component_with_feed_data", () => {
    render(<FeedCard feed={feed} />);

    expect(screen.getByAltText(feed.username)).toBeTruthy();
    
    expect(screen.getByText(feed.time)).toBeTruthy();
    expect(screen.getByAltText(feed.caption)).toBeTruthy();
    expect(screen.getByText(`${feed.likeCount} likes`)).toBeTruthy();
    expect(screen.getByText(`View all ${feed.commentCount} comments`)).toBeTruthy();
    expect(screen.getByText(feed.caption)).toBeTruthy();
  });
});