import { render, screen } from "@testing-library/react";
import UserList from "./UserList";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

test("affiche les utilisateurs", async () => {
  const mockUsers = [
    { name: "Eva" },
    { name: "Aude" },
    { name: "Anne" },
    { name: "Marc" },
  ];
  const mockRes = { data: mockUsers };
  axios.get.mockResolvedValue(Promise.resolve(mockRes));
  render(<UserList />);
  await screen.findByText("Eva");
  expect(screen.getByText("Eva")).toBeInTheDocument();
  expect(screen.getByText("Aude")).toBeInTheDocument();
  expect(screen.getByText("Anne")).toBeInTheDocument();
  expect(screen.getByText("Marc")).toBeInTheDocument();
});
