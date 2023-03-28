import UI, { faker } from "@component/gip-ui";

export default function App(props) {
  let emp2 = [...Array(50)].map((e, i) => ({
    name: faker.name.fullName(),
    age: faker.datatype.number({ min: 15, max: 30 }),
    location: [
      { address: faker.address.cityName(), phone: faker.phone.number() },
      { address: faker.address.cityName(), phone: faker.phone.number(), room: ["bed rood", "kitchen"] },
    ],
  }));

  return (
    <UI.Stack p={3} spacing={1}>
      <UI.Text variant="h2" bold color="primary.main">
        TOP 100 Best Employee
      </UI.Text>
      <UI.Text variant="body1">[Name] ([age])</UI.Text>
      <UI.Divider />

      {emp2.map((d, ix) => (
        <UI.Stack>
          <UI.Text variant="body1" bold={ix == 10}>
            {d.name} ({d.age})
          </UI.Text>
          {d.location.map((dx, dix) => (
            <UI.Text variant="caption" bold={ix == 10} italic>
              addres {dix + 1} : {dx.address} ; ph : {dx.phone}; room({dx.room?.length || 0})
            </UI.Text>
          ))}
        </UI.Stack>
      ))}
    </UI.Stack>
  );
}
