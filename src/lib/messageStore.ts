export interface Message {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  message: string;
  date: string;
  lu: boolean;
}

const STORAGE_KEY = "scalyo_messages";

export function getMessages(): Message[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function addMessage(msg: Omit<Message, "id" | "date" | "lu">): void {
  const messages = getMessages();
  messages.unshift({
    ...msg,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    lu: false,
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function markAsRead(id: string): void {
  const messages = getMessages();
  const msg = messages.find((m) => m.id === id);
  if (msg) msg.lu = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}
