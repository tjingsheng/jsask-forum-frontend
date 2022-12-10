import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getContacts } from "../pages/contacts.jsx";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function NavBar() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="navBar">
        <h1>React Router Contacts</h1>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              {/* <a href={`/contacts/1`}>Your Name</a> */}
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              {/* <a href={`/contacts/2`}>Your Friend</a> */}
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
  }
