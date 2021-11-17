import React from "react";
import { Tab } from "semantic-ui-react";

export default function ProfileContent() {
  const panes = [
    { menuItem: "About", render: () => <Tab.Pane>About User</Tab.Pane> },
    {
      menuItem: "Favorites",
      render: () => <Tab.Pane>Favorite Restaurants</Tab.Pane>,
    },
    { menuItem: "Following", render: () => <Tab.Pane>Following</Tab.Pane> },
    { menuItem: "Followers", render: () => <Tab.Pane>Followers</Tab.Pane> },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
    />
  );
}
