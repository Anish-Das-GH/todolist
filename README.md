
# TodoList React App



## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Anish-Das-GH/todolist.git
   ```

3. Navigate to the project directory:
   ```bash
   cd todolist
   ```

4. Install dependencies using npm or yarn:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Usage

To use the TodoList component in your React application, import it and include it in your component tree.

```jsx
import React from 'react';
import TodoList from './todolist';

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
```

## Testing Guidance

1. **Adding a Task:**
   - Enter a task in the input field.
   - Click on the "Add Task" button.
   - Verify that the task is added to the list.

2. **Editing a Task:**
   - Click on the "Edit" button next to the task you want to edit.
   - Enter the new text in the input field that appears.
   - Click on the "Save" button.
   - Verify that the task text is updated.

3. **Completing a Task:**
   - Click on the task text to toggle its completion status.
   - Verify that completed tasks are displayed with a strike-through style.

4. **Removing a Task:**
   - Click on the "Remove" button next to the task you want to remove.
   - Verify that the task is removed from the list.

5. **Sorting Tasks:**
   - Use the "Sort by" dropdown menu to filter tasks based on completion status (All, Completed, Incomplete).
   - Verify that tasks are displayed according to the selected filter.

6. **LocalStorage Integration:**
   - Add tasks and verify that they persist between page reloads.


