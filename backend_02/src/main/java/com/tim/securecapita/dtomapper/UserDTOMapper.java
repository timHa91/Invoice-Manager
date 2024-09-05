package com.tim.securecapita.dtomapper;

import com.tim.securecapita.dto.UserDTO;
import com.tim.securecapita.model.Role;
import com.tim.securecapita.model.User;
import org.springframework.beans.BeanUtils;

public class UserDTOMapper {
    public static UserDTO toDTO(User user) {
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO);

        return userDTO;
    }

    public static UserDTO toDTO(User user, Role role) {
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO);
        userDTO.setRoleName(role.getName());
        userDTO.setPermissions(role.getPermission());

        return userDTO;
    }

    public static User toUser(UserDTO userDTO) {
        User user = new User();
        BeanUtils.copyProperties(userDTO, user);

        return user;
    }
}
