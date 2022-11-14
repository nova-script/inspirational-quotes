# **Inspirational Quotes**

Inspirational quotes is a website where you can store your favorite quotes.

It's under development, but it's working perfectly right now.

## **Objective**:

It was developed to accomplish a code challenge made by [Woovi](https://woovi.com/), due to a selective process for a developer vacancy at the company.

They asked the participants to build a simple CRUD using `GraphQL` and `Relay`.

Additionally, there's a list of technologies the company uses (tech stack) which I'm trying to implement as much as possible.

It should also be a complete social media in the near future, along with user registration, login and feed of latests registered quotes.

#### You can check the full changelog [here](changelog.md), containing the next improvements to be made. 
---

## **How to Run**:

Simply build the `MongoDB` container and run it:

```
docker-compose -f docker-compose-dev.yml up
```

Then, run the **API** and the **WEB client.**
```
npm run dev
```

---



## API

#### **Requirements**:

👤 User features:

- [x] View all registered quotes
- [x] View especific quote
- [x] Add new quote
- [x] Edit existent quote
- [x] Delete existent quote


## WEB


#### **Considerations**:

The web client was build upon **Relay**, along with the **[Render as you Fetch pattern](https://relay.dev/docs/guided-tour/rendering/queries/#render-as-you-fetch)**, which is encouraged by Relay itself as the pattern avoids waterfalling round trips that can lead to performance degradation.


#### **Requirements**:

👤 User features:

- [x] View all registered quotes
- [x] Edit existent quote
- [x] Delete existent quote
- [x] Add new quote
