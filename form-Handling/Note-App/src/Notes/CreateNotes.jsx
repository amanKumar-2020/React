const CreateNotes = ({ title, setTitle, desc, setDesc ,onSubmit,onUpdate,OnClear}) => {

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };
  
  return (
    <div className="create-section">
      <header>
        <h1>My Notes</h1>
        <div className="date-display">
          <div>Saturday</div>
          <div>12:00 AM</div>
        </div>
      </header>
      <div className="input-group">
        <input
          className="custom-input"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="custom-textarea"
          name="desc"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="button-group">
        <div
          className="btn btn-clear"
          onClick={(e) => {
            (createRipple(e), OnClear());
          }}
        >
          Clear
        </div>
        <div
          className="btn btn-update"
          onClick={(e) => {
            (createRipple(e), onUpdate());
          }}
        >
          Update
        </div>
        <div
          className="btn btn-submit"
          onClick={(e) => {
            (createRipple(e), onSubmit());
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
