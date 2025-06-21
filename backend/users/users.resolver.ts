@Resolver()
export class UsersResolver {
  @Query(() => String)
  getUsers() {
    return 'User Data';
  }
}