import { useRef } from 'react';

const catList: any[] = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

export function CatRefs() {

  const itemsRef = useRef(new Map());

  function scrollTo(id: number) {
    const img = itemsRef.current.get(id);
    img.scrollIntoView();
  }

    return (
      <>
        <nav>
          <button onClick={() => scrollTo(0)}>
            Tom
          </button>
          <button onClick={() => scrollTo(5)}>
            Maru
          </button>
          <button onClick={() => scrollTo(9)}>
            Jellylorum
          </button>
        </nav>
        <div>
          <ul>
            {
              catList.map(cat => (
                  <li
                      key={cat.id}
                      ref={img => {
                        if (img) {
                          itemsRef.current.set(cat.id, img);
                        } else {
                          itemsRef.current.delete(cat.id);
                        }
                      }}
                  >
                    <img src={cat.imageUrl} />
                  </li>
              ))
            }
          </ul>
        </div>
      </>
  );
}
