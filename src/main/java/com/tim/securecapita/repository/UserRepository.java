package com.tim.securecapita.repository;

import com.tim.securecapita.model.User;

import java.util.Collection;

public interface UserRepository <T extends User> {
    /* Basic CRUD Operations */
    T create(T data);
    Collection<T> list(int page, int pageSize);
    T get(Long id);
    T update(T data);
    Boolean delete(Long id);

    /* More complex Operations */

}
