export default function Player(props) {
  return (
    <div className="grid gap-4">
      <h2>{props.player.name}</h2>
      <h3>Health: {props.player.health}%</h3>
      <button className="px-4 py-2 rounded bg-slate-600 text-white" onClick={props.onClick}>Attack</button>
    </div>
  );
}
