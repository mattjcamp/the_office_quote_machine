export default function Hello({ child }) {
  return (
    <>
      <div className="clear text-5xl font-bold mt-5">Hello World!</div>
      <div className="text-center">{child}</div>
    </>
  );
}
