export default function App() {
  //
  //配列を用意
  const acc1 = { name: "A", pin: "111" };
  const acc2 = { name: "B", pin: "222" };
  const acc3 = { name: "C", pin: "333" };
  let accounts = [acc1, acc2, acc3];

  console.log("●acounts(初期値)");
  console.log(accounts);

  //
  //findeIndex()
  const currentAcc = acc3;
  const index = accounts.findIndex((acc) => acc.name === currentAcc.name);

  console.log("●acc3のアカウントをfindeIndexした値");
  console.log(index);

  //
  // splice()
  const handleAcc = () => {
    accounts.splice(index, 1);
    console.log("●acc3をspliceした後・・・");
    console.log(accounts);
  };

  return (
    <>
      <button onClick={handleAcc}>delete</button>
    </>
  );
}
