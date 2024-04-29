//navigationBar
//  shopListName - Displays the list name after the application name.
//  BackBtn - Renders a button to return to the route overview.
import React from 'react';

interface NavigationBarProps {
  shopListName: string;
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <header className = "navbar sticky-top bg-primary flex-md-nowrap p-0 shadow" data-bs-theme="dark">
  <span className = "navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" >Shopping List - {props.shopListName}</span>
</header>
  );
};

export default NavigationBar;
