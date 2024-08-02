package com.tim.securecapita.service;

import com.tim.securecapita.dto.UserDTO;
import com.tim.securecapita.model.User;

public interface UserService {
    UserDTO createUser(User user);
}
