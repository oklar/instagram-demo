import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="
        border-gray 
        mt-8
        flex 
        space-x-2 
        overflow-x-scroll 
        rounded-sm 
        border 
        border-gray-200 
        bg-white
        p-6
        scrollbar-thin
        scrollbar-thumb-black
      "
    >
      {session && <Story img={session.user.image} />}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
