import { useEffect, useState } from 'react';

export function UsersDemo() {

  const [userId, setUserId] = useState('1');
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {

    async function getUser() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const user = await res.json()
      if (!ignore) {
        setName(user.name)
      }
    }

    let ignore = false;
    setName(null);
    getUser();

    return () => {
      ignore = true;
    }
  }, [userId]);

  return <>
    <select value={userId} onChange={e => {
      setUserId(e.target.value);
    }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <hr />
    <p>{ name ?? 'Loading...' }</p>
  </>
}
