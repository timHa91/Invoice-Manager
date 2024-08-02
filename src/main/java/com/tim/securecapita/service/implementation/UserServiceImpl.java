package com.tim.securecapita.service.implementation;

import com.tim.securecapita.dto.UserDTO;
import com.tim.securecapita.dtomapper.UserDTOMapper;
import com.tim.securecapita.model.User;
import com.tim.securecapita.repository.UserRepository;
import com.tim.securecapita.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository<User> userRepository;

    @Override
    public UserDTO createUser(User user) {
        return UserDTOMapper.toDTO(userRepository.create(user));
    }
}
