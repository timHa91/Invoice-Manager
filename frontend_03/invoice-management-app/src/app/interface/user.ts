export interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  phone?: number;
  title?: string;
  bio?: string;
  imageUrl?: string;
  enabled: boolean;
  isNotLocked: boolean;
  createdAt?: Date;
  roleName: string;
  permissions: string;
}
