package com.tim.securecapita.rowmapper;

import com.tim.securecapita.model.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return User.builder()
                .id(resultSet.getLong("id"))
                .email(resultSet.getString("email"))
                .firstName(resultSet.getString("first_name"))
                .lastName(resultSet.getString("last_name"))
                .password(resultSet.getString("password"))
                .createdAt(resultSet.getTimestamp("created_at").toLocalDateTime())
                .enabled(resultSet.getBoolean("enabled"))
                .imageUrl(resultSet.getString("image_url"))
                .isNotLocked(resultSet.getBoolean("non_locked"))
                .build();
    }
}
