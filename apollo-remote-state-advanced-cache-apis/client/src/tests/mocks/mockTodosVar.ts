
import { Todos } from "../../models/Todos";
import { createMockReactiveVar } from "../createMockReactiveVar";

export const mockTodosVar = createMockReactiveVar<Todos>([]);