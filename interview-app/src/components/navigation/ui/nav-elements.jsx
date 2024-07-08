/**
 * @param {Object} navList - array of strings
 */

export function NavElements({ navList }) {
  let navListElements = navList.map((e, i) => {
    return <NavElement element={e} key={i} />;
  });
  return <>{navListElements}</>;
}

function NavElement({ element }) {
  return <div className="bg-orange-500 mb-5">{element}</div>;
}
