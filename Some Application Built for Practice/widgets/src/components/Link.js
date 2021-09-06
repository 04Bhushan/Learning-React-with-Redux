import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {

    //metakey & ctrlkey are boolean properties
    // using metaKey on macos & ctrlKey on windows we can onen link in a new tab just by ctrl + click
    if(event.metaKey || event.ctrlKey)
    {
        return;
    }

    //it avoids reloading of full page that is it changes the normal behaviour of browser
    event.preventDefault();

    //by this we can change the URL without loading full page
    window.history.pushState({}, "", href);

    //it will just communicate with the events that the route components has change
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
