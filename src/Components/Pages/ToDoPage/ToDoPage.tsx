import React, { useState } from 'react';
import Header from '../../Header/Header';
import { Button } from '../../Ui/Button';
import InputUi from '../../Ui/InputUi';
import TitleComponent from '../../Ui/TitleComponent';

interface ToDoPageProps {}
type Task = {
  id: number;
  name: string;
  date: string;
};

const ToDoPage: React.FC<ToDoPageProps> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editDate, setEditDate] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      name,
      date,
    };
    if (editTaskId !== null) {
      handleEdit(editTaskId, name, date);
      setEditTaskId(null);
      setEditName('');
      setEditDate('');
    } else {
      setTasks([...tasks, newTask]);
      setName('');
      setDate('');
    }
  };

  const handleEdit = (id: number, name: string, date: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, name, date } : task))
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditButtonClick = (id: number, name: string, date: string) => {
    setEditTaskId(id);
    setEditName(name);
    setEditDate(date);
  };
  return (
    <>
      <Header type="home" />
      <section className="w-full h-full md:h-screen bg-[#efefef]">
        <div className="container lg:max-w-[1600px] px-1 md:px-10 flex flex-col justify-center items-center w-full h-full relative">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <TitleComponent title="Todo Lits" />
            <div className="flex lg:justify-between justify-center items-center flex-col-reverse lg:flex-row w-full pt-20 pb-32">
              <div className="lg:w-1/2 w-full flex justify-start pt-8">
                <ul className="w-full">
                  {tasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex flex-col lg:flex-row py-4 gap-y-5 lg:gap-x-5 text-[#444444] text-xl font-bold tracking-[0.2rem] w-full px-5 justify-around"
                    >
                      {editTaskId === task.id ? (
                        <>
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                          <input
                            type="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                          />
                          <div className="flex justify-center items-center gap-x-2">
                            <Button
                              title="Save"
                              onClick={() => {
                                handleEdit(task.id, editName, editDate);
                                setEditTaskId(null);
                                setEditName('');
                                setEditDate('');
                              }}
                            />
                            <Button
                              title="Cancel"
                              onClick={() => {
                                setEditTaskId(null);
                                setEditName('');
                                setEditDate('');
                              }}
                            />
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col w-full gap-y-5">
                          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-2 h-14">
                            <span className="task-input w-full lg:w-[75%] h-full flex justify-center items-center">
                              {task.name}
                            </span>
                            <span className="task-input w-full lg:w-[25%] text-sm h-full flex justify-center items-center">
                              {task.date ? task.date : 'No date'}
                            </span>
                          </div>
                          <div className="flex justify-end items-end gap-x-5">
                            <Button
                              size="todo"
                              title="Edit"
                              onClick={() =>
                                handleEditButtonClick(
                                  task.id,
                                  task.name,
                                  task.date
                                )
                              }
                            />

                            <Button
                              title="Delete"
                              size="todo"
                              onClick={() => handleDelete(task.id)}
                            />
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full flex justify-center">
                <form onSubmit={handleSubmit}>
                  <div>
                    <InputUi title="Task:" type='text' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <InputUi title="Data:" type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                  </div>
                  <div className="flex justify-center items-center">
                    <Button title="Add new Task" type="submit" size="top" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToDoPage;
