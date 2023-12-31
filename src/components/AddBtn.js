export default function AddBtn({ setFriend, friend }) {
  return (
    <button
      className="add"
      onClick={() => {
        setFriend([
          ...friend,
          { id: Math.floor(Math.random() * 10000) + 1, percentage: 0 },
        ]);
        console.log(Math.floor(Math.random() * 10000) + 1);
      }}
    >
      Add Friend
    </button>
  );
}
