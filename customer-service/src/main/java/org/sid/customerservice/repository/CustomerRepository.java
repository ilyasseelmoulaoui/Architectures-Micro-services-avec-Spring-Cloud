package org.sid.customerservice.repository;

import org.sid.customerservice.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource  //pour exposer cela sous forme d'une app RestFull
public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
